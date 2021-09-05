// creates new user
export const signup = user => (
    $.ajax({
        url: "/api/users",
        method: "POST",
        data: {user}
    })
);

// signing in existing user / create a new session
export const login = user => (
    $.ajax({
        url: "/api/session",
        method: "POST",
        data: {user}
    })
);


// logout / delete a session

export const logout = () => (
    $.ajax({
        url: "/api/session",
        method: "DELETE"
    })
)