package dev.pensare.demo.backend;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class Activity {
    private String userId;
    private String eventType;
}
