package kr.co.thirtytwodevs.cssselectortrainer.questions.service;

import kr.co.thirtytwodevs.cssselectortrainer.questions.domain.Questions;
import kr.co.thirtytwodevs.cssselectortrainer.questions.repository.QuestionsRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class QuestionsService {

    private final QuestionsRepository questionsRepository;

    public QuestionsService(QuestionsRepository questionsRepository) {
        this.questionsRepository = questionsRepository;
    }

    /**
     * 전체 문항 조회
     */
    public List<Questions> findQuestions(){
        return questionsRepository.findAll();
    }

}
