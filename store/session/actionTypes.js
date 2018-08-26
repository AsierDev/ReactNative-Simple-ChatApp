// restores user sessions. Firebase restores user sessions asynchronously, so the system will display a preloader until the action is completed.
export const SESSION_RESTORING = 'SESSION_RESTORING'

// displays a preloader until the login or registration request has been processed by Firebase.
export const SESSION_LOADING = 'SESSION_LOADING'

// transfers a user to the chat screen after login has successfully completed
export const SESSION_SUCCESS = 'SESSION_SUCCESS'

// displays login or registration errors
export const SESSION_ERROR = 'SESSION_ERROR'

// displays the login screen
export const SESSION_LOGOUT = 'SESSION_LOGOUT'

