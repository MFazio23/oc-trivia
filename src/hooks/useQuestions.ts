import type {Question} from "@/types/Question";
import {addDoc, collection, onSnapshot, query} from "firebase/firestore";
import {firebaseAuth, firebaseDB} from "@/firebase";
import {useEffect, useState} from "react";

const DEFAULT_PAGE_SIZE = 4;

export function useQuestions() {
    const [questions, setQuestions] = useState<Question[]>([])
    const [filteredQuestions, setFilteredQuestions] = useState<Question[]>([])
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [pagedQuestions, setPagedQuestions] = useState<Question[]>([]);
    const [searchTerm, setSearchTerm] = useState<string | undefined>(undefined);

    useEffect(() => {
        const questionsRef = collection(firebaseDB, 'questions');

        const questionQuery = query(
            questionsRef,
        );

        const unsubscribe = onSnapshot(questionQuery, (querySnapshot) => {
            const questions =
                querySnapshot.docs.map(doc => ({id: doc.id, ...doc.data()} as Question));

            setQuestions(questions);
        });

        return () => unsubscribe();

    }, []);

    useEffect(() => {
        if (!searchTerm) setFilteredQuestions(questions);
        else {
            setFilteredQuestions(questions.filter((q) => [
                q.answer.includes(searchTerm),
                q.clue1.includes(searchTerm),
                q.clue2.includes(searchTerm),
                q.clue3.includes(searchTerm),
                q.clue4.includes(searchTerm),
                q.notes?.includes(searchTerm),
            ].map(Boolean).some(i => i)));
        }
    }, [questions, searchTerm]);

    useEffect(() => {
        const startIndex = (currentPage - 1) * DEFAULT_PAGE_SIZE;
        const endIndex = startIndex + DEFAULT_PAGE_SIZE;
        setPagedQuestions(filteredQuestions.slice(startIndex, endIndex));
    }, [filteredQuestions, currentPage]);

    const addQuestion = async (question: Question) => {
        const currentUser = firebaseAuth.currentUser;

        if (currentUser) {
            await addDoc(collection(firebaseDB, 'questions'), {
                ...question,
                author: currentUser.displayName,
                userId: currentUser.uid,
                createdAt: new Date(),
                updatedAt: new Date(),
            })
        }
    }

    const questionCount = filteredQuestions?.length ?? 0;

    const handlePageUpdate = (newPage: number) => {
        if (newPage < 1 || newPage > Math.ceil(questionCount / DEFAULT_PAGE_SIZE)) return;
        setCurrentPage(newPage);
    }

    return {
        addQuestion,
        currentPage,
        handlePageUpdate,
        questions: filteredQuestions,
        pagedQuestions,
        searchTerm,
        setSearchTerm,
        questionCount,
    }
}
