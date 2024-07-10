export type TvShowDetail = {
    id: number,
    url: string,
    name: string,
    genres: string[],
    rating: {
      average: number,
    },
    externals: {
      tvrage: number,
      thetvdb: number,
      imdb: string,
    },
    image: {
      medium: string,
      original: string,
    },
    summary: string,
  }

  export type TvShow = {
    score: number,
    show: {
      id: number,
      name: string,
      genres: string[],
      rating: {
        average: number,
      },
      externals: {
        tvrage: number,
        thetvdb: number,
        imdb: string,
      },
      image: {
        medium: string,
        original: string,
      },
    }
  }