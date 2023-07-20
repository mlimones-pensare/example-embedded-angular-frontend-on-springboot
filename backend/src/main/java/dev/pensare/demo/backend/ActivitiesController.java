package dev.pensare.demo.backend;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@Slf4j
@AllArgsConstructor
public class ActivitiesController {
    @GetMapping("/api/activities")
    GetActivitiesResponse listActivities(){
        return GetActivitiesResponse.builder()
                .data(List.of(
                        Activity.builder().userId("user01").eventType("SESSION_SIGNIN").build(),
                        Activity.builder().userId("user01").eventType("SESSION_SIGNIN").build(),
                        Activity.builder().userId("user01").eventType("ADD_PAYEE").build(),
                        Activity.builder().userId("user01").eventType("PAYMENT").build()
                ))
                .build();

    }
}
