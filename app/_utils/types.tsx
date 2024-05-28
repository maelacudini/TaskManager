import { ReactNode } from "react";

export type ChildrenType = {
  children: ReactNode;
};

export interface Task {
  id: string;
  title: string;
  description: string;
  createdAt: string;
  dueDate: string;
  urgency: boolean;
  done?: boolean;
  tags: string[];
}

export interface TasksState {
  tasksSlice: Task[];
}

export type CoordsType = {
  latitude: number;
  longitude: number;
};

export type SuccessType = {
  coords: CoordsType;
};

export type ErrorType = {
  code: number;
  message: string;
};

export type DailyType = {
  time: string[];
  temperature_2m_max: number[];
  temperature_2m_min: number[];
  apparent_temperature_max: number[];
  apparent_temperature_min: number[];
  sunrise: string[];
  sunset: string[];
  daylight_duration: number[];
  uv_index_max: number[];
  precipitation_sum: number[];
  rain_sum: number[];
  precipitation_probability_max: number[];
  wind_speed_10m_max: number[];
  wind_gusts_10m_max: number[];
  wind_direction_10m_dominant: number[];
};

export type WeatherType = {
  latitude: number;
  longitude: number;
  timezone: string;
  daily: DailyType;
};

export type SetPermissionType = {
  permission: boolean | undefined;
  setPermission: (permission: boolean | undefined) => void;
};

export type IdTypeTask = {
  id: string | null;
  setOpen: (open: boolean) => void;
};

export interface FeedbackContextType {
  feedback: string | null;
  setFeedback: (feedback: string | null) => void;
}
