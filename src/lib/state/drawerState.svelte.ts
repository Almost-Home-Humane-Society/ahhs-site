import type { SharedState } from "./types";

export const drawerState = $state<SharedState<boolean>>({ value: false });