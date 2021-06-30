import React from "react";
import CollectionsOverview from "../../components/collections-overview/CollectionsOverview";
import { Route } from "react-router-dom";
import CategoryPage from "../collection/CollectionPage";

const Shop = ({ match }) => (
  <div className="shop-page">
    <Route exact path={`${match.path}`} component={CollectionsOverview} />
    <Route path="/shop/:collectionId" component={CategoryPage} />
  </div>
);

export default Shop;
