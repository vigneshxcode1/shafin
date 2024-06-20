class apiFeature {
  constructor(query, strquery) {
    (this.query = query),
     (this.strquery = strquery);
  }

  search() {
    let keyword = this.strquery.keyword
      ? {
          name: {
            $regex: this.strquery.keyword,
            $options: "i",
          },
        }
      : {};

    this.query.find({ ...keyword });
    return this;
  }

  filter() {
    const querystrcopy = { ...this.strquery };
    const removefield = ["keyword", "limit", "page"];
    removefield.forEach((fild) => delete querystrcopy[fild]);
    let strquery = JSON.stringify(querystrcopy);
    strquery = strquery.replace(/\b(gt|gte|lt|lte)/g, (match) => `$${match}`);
    this.query.find(JSON.parse(strquery));
    return this;
  }
  

  paginate(resultperpage) {
    const currentpage = Number(this.strquery.page);
    const skip = resultperpage + currentpage - 1;
    this.query.limit(resultperpage).skip(skip);
    return this;
  }
}

export default apiFeature;
