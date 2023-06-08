import { atom } from "recoil";

export const dataUsersState = atom({
	key: "dataUsersState",
	default: [],
});

export const searchResultState = atom({
	key: "searchResultState",
	default: [],
});
