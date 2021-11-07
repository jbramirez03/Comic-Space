import HTMLFlipBook from 'react-pageflip';

const Contributors = () => {
    return (
        <HTMLFlipBook width={300} height={400} drawShadow={true} >
        <div style={{backgroundColor: 'lightBlue'}} className="demoPage">Page 1</div>
        <div className="demoPage">Page 2</div>
        <div className="demoPage">Page 3</div>
        <div className="demoPage">Page 4</div>
    </HTMLFlipBook>
    )
}

export default Contributors
