package kr.co.thirtytwodevs.cssselectortrainer.questions.controller;

import kr.co.thirtytwodevs.cssselectortrainer.questions.domain.Questions;
import kr.co.thirtytwodevs.cssselectortrainer.questions.service.QuestionsService;
import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1/questions")
//@AllArgsConstructor
@RequiredArgsConstructor
public class QuestionsController {

    private final QuestionsService questionsService;

    /*
    public QuestionsController(QuestionsService questionsService) {
        this.questionsService = questionsService;
    }
    */

    @GetMapping
    public List<Questions> list(){
        List<Questions> questions = questionsService.findQuestions();
        return questions;
    }

    /*
    @GetMapping
    public String list(){
        //List<Questions> questions = questionsService.findQuestions();
        return "AAAA";
    }
    */

}
