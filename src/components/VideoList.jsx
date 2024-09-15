import "./VideoList.css";

const videos = [
    {
        name: `React Video`,
        duration: 15,
        id: 1,
    },
    {
        name: `React Video2`,
        duration: 20,
        id: 2,
    },
    {
        name: `React Video3`,
        duration: 25,
        id: 3,
    },
]
export function VideoList() {
    return (
        <>
            <h1 id={"id"}>Video</h1>
            {
            videos.map((video) => {
                return (
                    <div className={'nam'} key={video.id}>
                        <p>{video.name}</p>
                        <p>{video.duration}</p>
                        <button>Like!</button>
                    </div>
                )
            })
            }
        </>
    );
}