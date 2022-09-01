package kr.co.thirtytwodevs.cssselectortrainer.questions.controller;

// import com.google.gson.Gson;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import kr.co.thirtytwodevs.cssselectortrainer.questions.dto.QuestionsDTO;
import kr.co.thirtytwodevs.cssselectortrainer.questions.service.QuestionsService;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/v1/questions")
@RequiredArgsConstructor
public class QuestionsController {

    private final QuestionsService questionsService;

    @GetMapping
    public List<QuestionsDTO> list(){
        return questionsService.findQuestions();
    }


    /*
    @GetMapping
    public String list(){
        //List<Questions> questions = questionsService.findQuestions();
        return "AAAA";
    }
    */

}
