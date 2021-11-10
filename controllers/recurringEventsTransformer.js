export const transformRecurringEvent = (event) => {
    if(event.start_date > Date.now()) return event

    const startDateDiff = getDaysDifference(Date.now(), event.start_date)
    const endDateDiff = getDaysDifference(Date.now(), event.end_date)

    event.start_date = addDays(event.start_date, calculateDaysToAdd(startDateDiff, event.frequency))

    if(event.end_date < Date.now()) {
        event.end_date = addDays(event.end_date, calculateDaysToAdd(endDateDiff, event.frequency))
    }

    return event
}

function calculateDaysToAdd(daysDiff, frequency){
    return daysDiff - daysDiff % frequency + frequency
}

function getDaysDifference(firstDate, secondDate){
    const diffTime = Math.abs(firstDate - secondDate);
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
}

function addDays(date, number) {
    return new Date(date.setDate(date.getDate() + number));
}