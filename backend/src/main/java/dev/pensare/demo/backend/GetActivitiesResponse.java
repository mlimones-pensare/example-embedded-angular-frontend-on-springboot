package dev.pensare.demo.backend;

import lombok.Builder;
import lombok.Data;

import java.util.List;

@Data
@Builder
public class GetActivitiesResponse {
    private List<Activity> data;
}
