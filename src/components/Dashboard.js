import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, Card, TablePagination, TextField } from "@mui/material";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./dashboard.css";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
export function Dashboard() {
const initialState = {
  title :'',
  bgimage :'',
  description :''
}

const [selectedMultipleImage,setSelectedMultipleImage]= useState([])
const [ imageConverted,setImageConverted] = useState([])
const [ formData,setFormData] = useState(initialState)
  const [page, setPage] = useState(0);
  const [value, setValue] = useState("");
  const [rowsPerPage, setRowsPerPage] = useState(5);
const [pictureDisplay,setPictureDisplay] = useState(null)
const [pictureData,setPictureData] = useState(null)

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      [{ font: [] }],
      [{ size: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image", "video"],
    ],
  };
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

const handleImageChange =(e)=>{
  console.log(e);
    let reader = new FileReader();
    console.log(reader)
    let file = e.target.files[0];
     console.log("/////",file)
     setPictureDisplay(file)
    reader.onloadend = () => {
       console.log("/////",reader.result)
       setPictureData(reader.result)
    };
    reader.readAsDataURL(file);

}
  const handleFieldChange =(e)=>{
// console.log(e.target.value);
    const { name , value} = e.target
setFormData((formData)=>({
  ...formData,[name] : value
}))

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) {
      console.log("Validate working");
    } else {
      console.log("elsee coming");
    }
  };
  const data = [
    {
      userId: 1,
      id: 1,
      title:
        "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
    },
    {
      userId: 1,
      id: 2,
      title: "qui est esse",
      body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
    },
    {
      userId: 1,
      id: 3,
      title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
      body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
    },
    {
      userId: 1,
      id: 4,
      title: "eum et est occaecati",
      body: "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
    },
    {
      userId: 1,
      id: 5,
      title: "nesciunt quas odio",
      body: "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque",
    },
    {
      userId: 1,
      id: 6,
      title: "dolorem eum magni eos aperiam quia",
      body: "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae",
    },
    {
      userId: 1,
      id: 7,
      title: "magnam facilis autem",
      body: "dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas",
    },
    {
      userId: 1,
      id: 8,
      title: "dolorem dolore est ipsam",
      body: "dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut vitae",
    },
    {
      userId: 1,
      id: 9,
      title: "nesciunt iure omnis dolorem tempora et accusantium",
      body: "consectetur animi nesciunt iure dolore\nenim quia ad\nveniam autem ut quam aut nobis\net est aut quod aut provident voluptas autem voluptas",
    },
    {
      userId: 1,
      id: 10,
      title: "optio molestias id quia eum",
      body: "quo et expedita modi cum officia vel magni\ndoloribus qui repudiandae\nvero nisi sit\nquos veniam quod sed accusamus veritatis error",
    },
    {
      userId: 2,
      id: 11,
      title: "et ea vero quia laudantium autem",
      body: "delectus reiciendis molestiae occaecati non minima eveniet qui voluptatibus\naccusamus in eum beatae sit\nvel qui neque voluptates ut commodi qui incidunt\nut animi commodi",
    },
    {
      userId: 2,
      id: 12,
      title: "in quibusdam tempore odit est dolorem",
      body: "itaque id aut magnam\npraesentium quia et ea odit et ea voluptas et\nsapiente quia nihil amet occaecati quia id voluptatem\nincidunt ea est distinctio odio",
    },
    {
      userId: 2,
      id: 13,
      title: "dolorum ut in voluptas mollitia et saepe quo animi",
      body: "aut dicta possimus sint mollitia voluptas commodi quo doloremque\niste corrupti reiciendis voluptatem eius rerum\nsit cumque quod eligendi laborum minima\nperferendis recusandae assumenda consectetur porro architecto ipsum ipsam",
    },
  ];


  const handleImageUpload = (e)=>{
const file = e.target.files
console.log(file);
//     for(let i=0; i< file.length; i++){
//       console.log(i,"12345",file[i]);
//       // setMultipleImage(file[i])
//       var  reader = new FileReader()
//       console.log(reader);
//       reader.onloadend = () => {
//         console.log("/////",reader.result)
//         console.log(file[i]);
//      };

//     }
   const files = e.target.files;
   const filesArray = [...files]

   const data = filesArray.map((data)=>{
console.log(data);
    return new Promise((resolve,reject)=>{
      const reader = new FileReader()
      reader.onloadend=(e)=>{
        resolve(e.target.result)
        setSelectedMultipleImage(e.target.result)
console.log(e.target.result);
        reader.onerror = (error) => {
          reject(error);
        };

        reader.readAsDataURL(data);
      }
    })
   })
Promise.all(data).then((imageConvertedData)=>{
console.log("proise====>",imageConvertedData);
  setSelectedMultipleImage([...selectedMultipleImage,...filesArray])
setImageConverted([...imageConverted , imageConvertedData])
}).catch((error)=>{
  console.log("errror", error);
})

  }
  console.log(selectedMultipleImage);

//   const handleUpload=()=>{
// console.log("qwerty",selectedMultipleImage, imageConverted);
//   }

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <TableCell>S.No</TableCell>
              <TableCell>Title</TableCell>

              <TableCell>Description</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((data) => (
                <TableRow>

                  <TableCell>{data.userId}</TableCell>
                  <TableCell>{data.title}</TableCell>
                  <TableCell>{data.body}</TableCell>

                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />

      <Card className="card-form" sx={{ height: "auto", marginLeft: "100px",display:'flex',flexDirection :'column' }}>

      <p>Title :</p>
      <TextField 
      className="txt-field-title"
        onChange={handleFieldChange}
        value={formData.title}
        name="title"
        />

<input
  accept="image/*"
  id="image-upload"
  type="file"
  multiple
  style={{ display: 'none' }}
  onChange={handleImageChange}
/>
<label htmlFor="image-upload">

            <Button  component='span' className='upload-pic-btn'>Upload Profile</Button>
            </label>
            {
              pictureData && <Card>
                 <CloseOutlinedIcon onClick={()=>setPictureData(null)}/>
                <img src={pictureData}/></Card>
            }



<Card>
        <p>Description :</p>
        <ReactQuill
          theme="snow"
          value={value}
          onChange={setValue}
          modules={modules}
          className="rich-text-div"
        />
</Card>
<input
  accept="image/*"
  id="image-upload-multiple"
  type="file"
  multiple
  style={{ display: 'none',marginTop:'50px' }}
   onChange={handleImageUpload}
/>
<label htmlFor="image-upload-multiple">

            <Button  component='span' 
            // onClick={handleUpload}
            className='upload-pic-btn-multiple'>Upload Images</Button>
            </label>

        {/* <p dangerouslySetInnerHTML={{ __html: value }} /> */}

        {/* <Button onClick={handleSubmit}>Submit</Button> */}
      </Card>
    </>
  );
}
