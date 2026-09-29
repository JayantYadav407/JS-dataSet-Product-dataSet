import { products } from './productData.js';

// ## 1. Category Performance
// For each category, calculate total products, average price, and lowest stock.



const solution1 = products.reduce((acc, curr, index, arr) => {

    if (!acc[curr["category"]]) {

        acc[curr["category"]] = {
            "category": curr["category"], "totalProducts": 1, "price": curr["price"], "stock": curr["stock"],

        }

    }
    else {
        acc[curr["category"]]["totalProducts"] = acc[curr["category"]]["totalProducts"] + 1;

        acc[curr["category"]]["price"] = curr["price"] + acc[curr["category"]]["price"];

        acc[curr["category"]]["stock"] = acc[curr["category"]]["stock"] > curr["stock"] ? acc[curr["category"]]["stock"] : curr["stock"];

    }
    return acc;

}, {});

// console.log(solution1);

// ## 2. Review Quality
// Find the product with the highest average review rating and compare it with the product rating field.

const solution2 = products.reduce((acc, curr, index, arr) => {

    const review = curr["reviews"].reduce((acc1, curr1, index, arr) => {

        if (acc1["totalProduct"]) {
            acc1["tototalProduct"] = acc1["tototalProduct"] + 1;
            acc1["rating"] = acc1["rating"] + curr1["rating"];
        }
        else {
            return { "totalProduct": 1, "rating": curr1["rating"], "productRating": curr["rating"] };
        }
        return acc1;
    }, {});

    if (acc["rating"]) {
        return review["rating"] / review["totalProduct"] > acc["rating"] / acc["totalProduct"] ? review : acc;
    }
    return review;


}, {});

// console.log(solution2);


// ## 3. Discount Analysis
// Return products whose effective price after discount is at least 40% lower than the listed price.

// ## 4. Reviewer Network
// Extract all unique reviewer emails and count how many reviews each email has written.

const solution3 = products.reduce((acc, curr, index, arr) => {

    const email = curr["reviews"].reduce((acc1, curr1, index1, arr1) => {

        if (acc1[curr1["reviewerEmail"]]) {
            acc1[curr1["reviewerEmail"]] = acc1[curr1["reviewerEmail"]] + 1;
        }
        else {
            acc1[curr1["reviewerEmail"]] = 1;
        }
        return acc1;

    }, acc);

    return email;

}, {});

// console.log(solution3);

// ## 5. Best Selling Candidates
// Identify products that combine high rating, low stock, and strong review scores.


// ## 6. Brand Comparison
// Group products by brand and rank brands by average rating and average price.


const solution6 = Object.values(products.filter((curr, index, arr) => {
    return curr["brand"];
}).reduce((acc, curr, index, arr) => {

    if (acc[curr["brand"]]) {
     
        acc[curr["brand"]]["price"] = acc[curr["brand"]]["price"] + curr["price"];
        acc[curr["brand"]]["rating"] = acc[curr["brand"]]["rating"] + curr["rating"];
        acc[curr["brand"]]["count"] = acc[curr["brand"]]["count"] + 1;
    }
    else {
            acc[curr["brand"]] = {};
            acc[curr["brand"]]["brand"] = curr["brand"];
            acc[curr["brand"]]["price"]= curr["price"];
            acc[curr["brand"]]["rating"] = curr["rating"];
            acc[curr["brand"]]["count"]= 1;
        }

    
    return acc;
}, {})).sort((a,b) =>{
     
    return b["rating"] -a["rating"];
}).sort((a,b) =>{
   return  b["price"] -a["price"];
});

// console.log(solution6);

// ## 7. Review Strength
// Find products with the highest review count and highest average review score.
const solution7 = products.map(product => {
    const reviewData = product.reviews.reduce((acc, review) => {
        acc.totalRating += review.rating;
        acc.count += 1;

        return acc;
    }, {
        totalRating: 0,
        count: 0
    });

    return {
        ...product,
        reviewCount: reviewData.count,
        averageRating: reviewData.totalRating / reviewData.count
    };
});
// console.log(solution7);

// ## 8. Stock Pressure
// Return products with low stock but high rating and sort them by urgency.

const solution8 = products.sort((a, b) =>{
    if(a.stock === b.stock)
        return b.rating -a.rating;
    return a.stock -b.stock;
})

// console.log(solution8);


// ## 9. Product Similarity
// Group products that share at least one tag and summarize their common attributes.

const solution9 = products.reduce((acc, curr) =>{
      
    if(curr["tags"].length >0)
    {
        acc[curr.title] = {
            category : curr.category,
            price  : curr.price,
            stock : curr.stock,
            tags: curr.tags
        }
    }
    return acc;

},{});

console.log(solution9);