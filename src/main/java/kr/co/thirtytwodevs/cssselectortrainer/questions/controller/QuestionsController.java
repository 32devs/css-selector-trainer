package kr.co.thirtytwodevs.cssselectortrainer.questions.controller;

import com.google.gson.Gson;
import kr.co.thirtytwodevs.cssselectortrainer.questions.domain.Questions;
import kr.co.thirtytwodevs.cssselectortrainer.questions.service.QuestionsService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1/questions")
public class QuestionsController {

    private final QuestionsService questionsService;

    public QuestionsController(QuestionsService questionsService) {
        this.questionsService = questionsService;
    }


    @GetMapping("/list")
    public String list(){
        List<Questions> questions = questionsService.findQuestions();
        return new Gson().toJson(questions);
    }

    /*
    @GetMapping
    public String list(){
        //List<Questions> questions = questionsService.findQuestions();
        return "AAAA";
    }
    */

}
