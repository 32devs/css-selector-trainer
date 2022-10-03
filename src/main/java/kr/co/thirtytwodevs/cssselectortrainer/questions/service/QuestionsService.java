package kr.co.thirtytwodevs.cssselectortrainer.questions.service;

import com.sun.istack.NotNull;
import kr.co.thirtytwodevs.cssselectortrainer.questions.domain.Questions;
import kr.co.thirtytwodevs.cssselectortrainer.questions.repository.QuestionsRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class QuestionsService {

    private final QuestionsRepository questionsRepository;

    /**
     * 전체 문항 조회
     */
    public List<Questions> findQuestions(){
        return questionsRepository.findAll();
    }

    /**
     * 선택 문항 조회 by ID
     */
    public Questions findQuestion(Long id){
        return questionsRepository.findById(id).orElseThrow(()->new IllegalArgumentException());
    }

    /**
     * 레코드 저장 save()
     */
    public void save(String title, String contents, String solution ){
        Questions questions = new Questions();
        questions.setTitle(title);
        questions.setContents(contents);
        questions.setSolution(solution);
        questionsRepository.save(questions);
    }

}
