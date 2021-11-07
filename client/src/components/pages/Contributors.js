import HTMLFlipBook from 'react-pageflip';
import qabas from '../../images/qabas-photo.jpg';

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
        <HTMLFlipBook width={350} height={450} drawShadow={true} style={styles} >
        <div  className="demoPage"><div className="info">
            <img className="avatar" src={qabas} alt='qabas'/>
                <h2>Qabas Al Ani</h2>
                <p>Full Stack Web Developer, love developing apps and websites with a focus on mobile-first design & graduate of the UNC Chapel Hill Coding Boot Camp</p>

            </div>
            
            </div>
        <div className="demoPage">Page 2</div>
        <div className="demoPage">Page 3</div>
        <div className="demoPage">Page 4</div>
    </HTMLFlipBook>
    )
}

export default Contributors
