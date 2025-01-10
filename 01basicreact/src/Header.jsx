function Header({ headerInfo, cname, children }) {
    // console.log(props.headerInfo.email)
    // console.log(props.headerInfo.phone)
    return (
      <div>
        {children}
        <h3>Header Part</h3>
        <h1>{headerInfo.email}</h1>
        <h1>{headerInfo.name}</h1>
      </div>
    );
  }
  
  export { Header };
  