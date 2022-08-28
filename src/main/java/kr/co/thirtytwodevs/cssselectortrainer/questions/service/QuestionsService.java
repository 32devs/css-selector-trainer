package kr.co.thirtytwodevs.cssselectortrainer.questions.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import kr.co.thirtytwodevs.cssselectortrainer.questions.domain.Questions;
import kr.co.thirtytwodevs.cssselectortrainer.questions.dto.QuestionsDTO;
import kr.co.thirtytwodevs.cssselectortrainer.questions.repository.QuestionRepositoryTest;
import kr.co.thirtytwodevs.cssselectortrainer.questions.repository.QuestionsRepository;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class QuestionsService {

    private QuestionsRepository questionsRepository;

    private final QuestionRepositoryTest questionRepositoryTest;

    /**
     * 전체 문항 조회
     */
    public List<QuestionsDTO> findQuestions(){
        List<Questions> list = questionsRepository.findAll();
        List<QuestionsDTO> result = new ArrayList<>();
        for(Questions q : list) {
            QuestionsDTO questionsDTO = QuestionsDTO.fromEntity(q);
            result.add(questionsDTO);
        }
        return result;
    }

}
