import axios from 'axios';

function App() {
  const axiosGet = (params) => {
    //GET : 입력한 url에 존재하는 자원에 요청을 한다.
    //쿼리스트링 으로 자세한 자원요청
    //json형식으로 응답
    axios.get('https://jsonplaceholder.typicode.com/posts', {
      params: {
        id:params
      }
    })
      //callback함수
      .then((Response) => console.log(Response))
      .catch((Error) => console.log(Error))

  }

  const axiosPost = () => {
    //POST : 새로운 리소스를 생성(create)할 때 사용한다.
    axios.post('https://jsonplaceholder.typicode.com/posts',//params
    ).then(res => console.log(res.data))
      .catch((response) =>
        console.log('Error!'))
  }

  const axiosDelete = () => {
    //REST 기반 API 프로그램에서 데이터베이스에 저장되어 있는 내용을 삭제하는 목적으로 사용한다.
    axios.delete('https://jsonplaceholder.typicode.com/posts').then(function (response) {
      console.log(response)
    }).catch(function (ex) {
      throw new Error(ex)
    })
  }
  const axiosPut = () => {
    //Put:데이터베이스에 저장되어 있는 내용을 수정
    axios.put('https://jsonplaceholder.typicode.com/posts')
      .then((Response) => console.log(Response))
      .catch((Error) => console.log(Error))
  }
  return (
    <div>
      Axios
      <div>
        <button onClick={axiosGet}>Get</button>
        <button onClick={() => axiosGet(1)}>Get + params</button>
        <button onClick={axiosPost}>Post</button>
        <button onClick={axiosDelete}>delete</button>
        <button onClick={axiosPut}>Put</button>
      </div>

    </div>
  );
}

export default App;
