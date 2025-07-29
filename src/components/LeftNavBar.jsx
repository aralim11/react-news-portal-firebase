import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom";

const LeftNavBar = () => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("https://openapi.programming-hero.com/api/news/categories")
            .then((res) => {
                if (!res.ok) {
                    throw new Error(`HTTP error! Status: ${res.status}`);
                }
                return res.json();
            })
            .then((data) => {
                setCategories(data.data.news_category);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message || "Something went wrong");
                setLoading(false);
            });
    }, []);

    return (
        <div className="flex flex-col gap-2">
            <h2 className="font-semibold mb-3">All Category ({categories.length})</h2>
            {
                categories.map((category) => (
                    <NavLink to={`/category/${category.category_id}`} className="btn" key={category.category_id}>{category.category_name}</NavLink>
                ))
            }
        </div>
    )
}

export default LeftNavBar