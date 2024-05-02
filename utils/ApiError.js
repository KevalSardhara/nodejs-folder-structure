class ApiError extends Error{
    constructor(status, message="Something went wrong", errors =[], stack="") {
        super(message);
        this.status = status;
        this.errors = errors;
        this.data = null;
        this.success = false;

        // production based code for the making
        if(stack) {
            this.stack = stack;
        } else {
            Error.captureStackTrace(this, this.stack);
        }
    }

}