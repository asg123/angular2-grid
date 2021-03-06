/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @return {?}
 */
export function generateUuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        let /** @type {?} */ r = Math.random() * 16 | 0, /** @type {?} */ v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}
/**
 * @param {?} a
 * @param {?} b
 * @return {?}
 */
export function sortItemsByPositionHorizontal(a, b) {
    if (a.col === b.col) {
        return a.row - b.row;
    }
    return a.col - b.col;
}
/**
 * @param {?} a
 * @param {?} b
 * @return {?}
 */
export function sortItemsByPositionVertical(a, b) {
    if (a.row === b.row) {
        return a.col - b.col;
    }
    return a.row - b.row;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTmdHcmlkSGVscGVycy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXIyLWdyaWQvIiwic291cmNlcyI6WyJoZWxwZXJzL05nR3JpZEhlbHBlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUVBLE1BQU07SUFDTCxNQUFNLENBQUMsc0NBQXNDLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxVQUFTLENBQUM7UUFDeEUscUJBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxtQkFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUM7UUFDbkUsTUFBTSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7S0FDdEIsQ0FBQyxDQUFDO0NBQ0g7Ozs7OztBQUVELE1BQU0sd0NBQXdDLENBQWEsRUFBRSxDQUFhO0lBQ3pFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDO0tBQUU7SUFDOUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQztDQUNyQjs7Ozs7O0FBRUQsTUFBTSxzQ0FBc0MsQ0FBYSxFQUFFLENBQWE7SUFDdkUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUM7S0FBRTtJQUM5QyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDO0NBQ3JCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdHcmlkSXRlbSB9IGZyb20gXCIuLi9kaXJlY3RpdmVzL05nR3JpZEl0ZW1cIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZVV1aWQoKTogc3RyaW5nIHtcclxuXHRyZXR1cm4gJ3h4eHh4eHh4LXh4eHgtNHh4eC15eHh4LXh4eHh4eHh4eHh4eCcucmVwbGFjZSgvW3h5XS9nLCBmdW5jdGlvbihjKSB7XHJcblx0XHRsZXQgciA9IE1hdGgucmFuZG9tKCkgKiAxNiB8IDAsIHYgPSBjID09ICd4JyA/IHIgOiAociAmIDB4MyB8IDB4OCk7XHJcblx0XHRyZXR1cm4gdi50b1N0cmluZygxNik7XHJcblx0fSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzb3J0SXRlbXNCeVBvc2l0aW9uSG9yaXpvbnRhbChhOiBOZ0dyaWRJdGVtLCBiOiBOZ0dyaWRJdGVtKTogbnVtYmVyIHtcclxuXHRpZiAoYS5jb2wgPT09IGIuY29sKSB7IHJldHVybiBhLnJvdyAtIGIucm93OyB9XHJcblx0cmV0dXJuIGEuY29sIC0gYi5jb2w7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzb3J0SXRlbXNCeVBvc2l0aW9uVmVydGljYWwoYTogTmdHcmlkSXRlbSwgYjogTmdHcmlkSXRlbSk6IG51bWJlciB7XHJcblx0aWYgKGEucm93ID09PSBiLnJvdykgeyByZXR1cm4gYS5jb2wgLSBiLmNvbDsgfVxyXG5cdHJldHVybiBhLnJvdyAtIGIucm93O1xyXG59XHJcbiJdfQ==