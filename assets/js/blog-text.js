//Blogs Data
const blog = [
    {
        id: 1,
        blogImg: "assets/images/blog/blog-01.jpg",
        avatar: "assets/images/avatar-1.jpg",
        date: "May 27, 2023",
        name: 'Dr Darren Elder',
        title: "What are the benefits of Online Doctor Booking?",
        article: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        id: 2,
        blogImg: "assets/images/blog/blog-02.jpg",
        avatar: "assets/images/avatar-1.jpg",
        date: "May 27, 2023",
        name: 'Dr Darren Elder',
        title: "What are the benefits of Online Doctor Booking?",
        article: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        id: 3,
        blogImg: "assets/images/blog/blog-03.jpg",
        avatar: "assets/images/avatar-1.jpg",
        date: "May 27, 2023",
        name: 'Dr Darren Elder',
        title: "What are the benefits of Online Doctor Booking?",
        article: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        id: 4,
        blogImg: "assets/images/blog/blog-04.jpg",
        avatar: "assets/images/avatar-1.jpg",
        date: "May 27, 2023",
        name: 'Dr Darren Elder',
        title: "What are the benefits of Online Doctor Booking?",
        article: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        id: 5,
        blogImg: "assets/images/blog/blog-05.jpg",
        avatar: "assets/images/avatar-1.jpg",
        date: "May 27, 2023",
        name: 'Dr Darren Elder',
        title: "What are the benefits of Online Doctor Booking?",
        article: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        id: 6,
        blogImg: "assets/images/blog/blog-06.jpg",
        avatar: "assets/images/avatar-1.jpg",
        date: "May 27, 2023",
        name: 'Dr Darren Elder',
        title: "What are the benefits of Online Doctor Booking?",
        article: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        id: 7,
        blogImg: "assets/images/blog/blog-07.jpg",
        avatar: "assets/images/avatar-1.jpg",
        date: "May 27, 2023",
        name: 'Dr Darren Elder',
        title: "What are the benefits of Online Doctor Booking?",
        article: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        id: 8,
        blogImg: "assets/images/blog/blog-08.jpg",
        avatar: "assets/images/avatar-1.jpg",
        date: "May 27, 2023",
        name: 'Dr Darren Elder',
        title: "What are the benefits of Online Doctor Booking?",
        article: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
];

blogCard(blog);

function blogCard(data) {
    const article = document.getElementById('blog-container');

    for (let i=0; i < data.length; i++) { 
        var blogData = `
        <div class="card">
            <div class="blog-img">
            <img src=${blog[i].blogImg}>
            </div>
            <div class="blog-content">
                <div class="blog-author">
                    <img src=${blog[i].avatar}>
                    <h4>${blog[i].name}</h4>
                </div>
                <p><i class="fa-solid fa-calendar-days"></i> ${blog[i].date}</p>
                <h3>${blog[i].title}</h3>
                <p>${blog[i].article.substring(0, 120) + "..."}</p>
            </div>
        </div>
        `
        article.innerHTML += blogData;
    };

};

let perPage = 5;
displayPageNav(perPage);
 




 
