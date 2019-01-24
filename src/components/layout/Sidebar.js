import React, { Component } from 'react';
import '../../App.css';

class Sidebar extends Component {
  state = {
      title: '',
      items: []
  }

  filterList = (title) => {
    let updatedList = this.props.books;
    let titles = []
    updatedList = updatedList.filter(book =>
      book.title.toLowerCase().search(this.state.title.toLowerCase()) !== -1);
    updatedList.forEach((book, i) =>
       {titles.push(book.title)})
    // console.log(titles)
      this.setState({ items: titles })
  }

  onChange = (e) => {this.setState({ title: e.target.value }, );
    this.filterList()
};

  onSubmit = (e) => {
      e.preventDefault();
      this.props.filterTitle(this.state.items);
      this.setState({ title: '' })
  }

  render() {
    return (
     <div className="sidebar-filter">
       <form onSubmit={this.onSubmit.bind(this)}>
       <fieldset className="form-group">
         <input
         type="serch"
         name="search"
         placeholder="Type name..."
         value={this.state.title}
         onChange={this.onChange.bind(this)}
         />
         <button
         type="submit"
         value="submit"
         >
           Submit
         </button>
        </fieldset>
       </form>
       <List items={this.state.items} />
     </div>
    )
  }
}

class List extends Component{
  render() {
    return (
      <ul>
        {this.props.items.map((item) => {
          return (
            <li className="list-group-item" data-category={item} key={item}>
              {item}
            </li>
          );
        })}
      </ul>
    );
  }
}


export default Sidebar;