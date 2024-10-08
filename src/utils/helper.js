export function getYearMonthDifference(dateString) {
    const givenDate = new Date(dateString);
    const currentDate = new Date();

    // Calculate year difference
    let yearDiff = currentDate.getUTCFullYear() - givenDate.getUTCFullYear();

    // Calculate month difference
    let monthDiff = currentDate.getUTCMonth() - givenDate.getUTCMonth();

    // Adjust if the month difference is negative
    if (monthDiff < 0) {
        yearDiff--; // Subtract one year since we haven't reached the given month yet
        monthDiff += 12; // Add 12 months to the month difference
    }

    // Construct result string based on year and month differences
    let result = '';

    if (yearDiff > 0) {
        result += yearDiff === 1 ? `${yearDiff} year` : `${yearDiff} years`;
    }

    if (monthDiff > 0) {
        if (result.length > 0) result += ' and ';
        result += monthDiff === 1 ? `${monthDiff} month` : `${monthDiff} months`;
    }

    return result || '0 months';  // Return "0 months" if both are zero
}