import Days from "./Days";

export default function Title(){
    return (
        <div style={{maxWidth: "350px", width : "100%", width: "80vw", height: "50vh", margin: "5vh auto", padding: "1vh 0vw", border: "1px solid rgb(221, 221, 221)", boxSizing: "border-box", borderRadius: "5px"}}>
            <h3>주간 평가</h3>
            <Days days="금"/>
            <Days days="토"/>
            <Days days="일"/>
            <Days days="월"/>
            <Days days="화"/>
            <Days days="수"/>
            <Days days="목"/>
        </div>
    ); 
}