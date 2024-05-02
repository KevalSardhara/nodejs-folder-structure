class ApiResponce {
    constructor(statusCode, data, message="", success=true) {
        this.status = statusCode;
        this.data = data;
        this.message = message;
        this.success = success;
    }
}