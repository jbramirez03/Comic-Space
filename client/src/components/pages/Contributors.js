import HTMLFlipBook from 'react-pageflip';

const Contributors = () => {

    const styles = {
        boxShadow: '0 0 8px 8px gray',
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '2%',
        marginBottom: 'auto',
        width: '40%',
    }

    return (
        <HTMLFlipBook width={300} height={400} drawShadow={true} style={styles} >
        <div  className="demoPage">Page 1</div>
        <div className="demoPage">Page 2</div>
        <div className="demoPage">Page 3</div>
        <div className="demoPage">Page 4</div>
    </HTMLFlipBook>
    )
}

export default Contributors
