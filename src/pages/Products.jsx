import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import ProductCard from "../components/ProductCard";
import products, { categories } from "../data/products";

// Shop page: search, filter by category and sort – all done in the browser.
function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get("category") || "All";
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("featured");

  function changeCategory(cat) {
    if (cat === "All") setSearchParams({});
    else setSearchParams({ category: cat });
  }

  const visibleProducts = useMemo(() => {
    let list = products.filter((p) => {
      const matchesCategory = category === "All" || p.category === category;
      const text = (p.name + " " + p.tagline).toLowerCase();
      const matchesSearch = text.includes(search.trim().toLowerCase());
      return matchesCategory && matchesSearch;
    });

    if (sort === "low") list = [...list].sort((a, b) => a.price - b.price);
    if (sort === "high") list = [...list].sort((a, b) => b.price - a.price);
    if (sort === "name") list = [...list].sort((a, b) => a.name.localeCompare(b.name));

    return list;
  }, [category, search, sort]);

  return (
    <>
      <PageHeader
        eyebrow="The shop"
        title="Our products"
        subtitle="Skincare and makeup essentials, all cruelty-free."
      />

      <section className="section container">
        <div className="toolbar">
          <div className="chips" role="group" aria-label="Filter by category">
            {categories.map((cat) => (
              <button
                key={cat}
                className={cat === category ? "chip active" : "chip"}
                onClick={() => changeCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="toolbar-right">
            <input
              type="search"
              className="search"
              placeholder="Search products…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              aria-label="Search products"
            />
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              aria-label="Sort products"
            >
              <option value="featured">Featured</option>
              <option value="low">Price: low to high</option>
              <option value="high">Price: high to low</option>
              <option value="name">Name A–Z</option>
            </select>
          </div>
        </div>

        <p className="result-count">
          Showing {visibleProducts.length} of {products.length} products
        </p>

        {visibleProducts.length > 0 ? (
          <div className="product-grid">
            {visibleProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <p>No products match “{search}”.</p>
            <button className="btn btn-outline" onClick={() => setSearch("")}>
              Clear search
            </button>
          </div>
        )}
      </section>
    </>
  );
}

export default Products;
