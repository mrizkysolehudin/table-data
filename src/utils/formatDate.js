import moment from "moment";

export default function formatDate(dateString) {
	const date = moment(dateString, "YYYY-MM-DD");

	const formattedDate = date.format("DD MMMM YYYY");

	return formattedDate;
}
