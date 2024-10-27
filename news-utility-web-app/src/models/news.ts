export class News {
    title: string;
    publishedAt: string;
    urlToImage: string;
    author: string;
    description: string;
    content: string;
    url: string;

    constructor(title: string,
        publishedAt: string,
        urlToImage: string,
        author: string,
        description: string,
        content: string,
        url: string) {
        this.title = title;
        this.publishedAt = publishedAt;
        this.urlToImage = urlToImage;
        this.author = author;
        this.description = description;
        this.content = content;
        this.url = url;
    }
}