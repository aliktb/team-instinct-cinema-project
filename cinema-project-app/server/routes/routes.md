base url http://localhost:3001/

movie routes

create - movies/create
update - movies/update/{id}
delete - movies/delete/{id}
get all - movies/
get by id - movies/{id}
get by title - movies/title/{title}
get by tag - movies/tag/{tag}
get by cast - movies/cast/{name}

booking routes

create - bookings/create
update - bookings/update/{id}
delete - bookings/delete/{id}
get all - bookings/
get by id - bookings/{id}
get by reference - bookings/ref/{reference}

screen routes

create - screens/create
update - screens/update/{id}
delete - screens/delete/{id}
get all - screens/
get by id - screens/{id}
get by movie title - screens/title/{title}
get by exact movie title - screens/title/e/{title}
get by movie tag - screens/tag/{tag}

discussion routes

create - posts/create
update - posts/update/{id}
delete - posts/delete/{id}
get all - posts/
get by id - posts/{id}
get by movie id - posts/movie/{id}