package kr.co.thirtytwodevs.cssselectortrainer.questions.controller;

import kr.co.thirtytwodevs.cssselectortrainer.questions.domain.Questions;
import kr.co.thirtytwodevs.cssselectortrainer.questions.service.QuestionsService;
import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/v1/questions")
//@AllArgsConstructor
@RequiredArgsConstructor
public class QuestionsController {

    private final QuestionsService questionsService;

    /**
     * 전체문항조회
     * */
    @GetMapping
    public List<Questions> list(){
        List<Questions> questions = questionsService.findQuestions();
        return questions;
    }

    /**
     * 선택 문항 조회 by ID
     */
    @GetMapping("{id}")
    public Questions findById(@PathVariable Long id){
       return questionsService.findQuestion(id);
    }

    /**
     * 레코드 저장 save()
     */
    @GetMapping("/{title}/{contents}/{solution}")
    public void save(@PathVariable String title, @PathVariable String contents, @PathVariable String solution){
       questionsService.save(title,contents,solution);
    }

}
