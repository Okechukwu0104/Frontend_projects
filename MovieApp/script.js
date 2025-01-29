const API_KEY = "api_key=717ccf6765dcaa577801cadcc372f394";
const TOP_RATED_URL = `https://api.themoviedb.org/3/movie/top_rated?${API_KEY}`;
const IMAGE_URL = `https://image.tmdb.org/t/p/w500/`;
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?${API_KEY}&query=`;

const getMovie = async (url) => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        showMovie(data.results);
    } catch (error) {
        alert(error);
    }
};

const randomStars = (average) => {
    if (average >= 9.0) {
        return "⭐⭐⭐⭐⭐";
    } else if (average >= 8.0) {
        return "⭐⭐⭐⭐";
    } else if (average >= 7.0) {
        return "⭐⭐⭐";
    } else if (average >= 6.0) {
        return "⭐⭐";
    } if (average >= 4.0 && average < 6.0) {
        return "⭐";
    }else{
        return "No Stars"
    }
};



const reduceOverview = (overView) => {
    if (overView.length > 249) {
        return overView.substring(0, 249) + "...";
    }
    return overView;
}


const showMovie = (movies) => {
    const videoTray = document.getElementById("videos");
    videoTray.innerHTML = "";
    movies.forEach((movie) => {
        const { title, overview, poster_path, vote_average } = movie;
        let newElement = `
        <div class="vid">

                <div style="display: flex; width : 30rem;" ><h2>Title :</h2><p class="p" >${title}</p></div>
                <img src="${IMAGE_URL}${poster_path}" alt="Movie poster">
                <p class="description" style="width:27rem;">${reduceOverview(overview)}</p>
                <p>Ratings: ${randomStars(vote_average)} , ${vote_average}</p>
        </div>`;
        videoTray.innerHTML += newElement;
    });
}

const searchInput = async () => {
    try {
        let search = document.getElementById("searchInput").value;
        const response = await fetch(SEARCH_API + search);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        showMovie(data.results);
        if (search === "") {
            history.go(0);
        }
    } catch (error) {
        alert(error);
    }
};

getMovie(TOP_RATED_URL);
