import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import {
  Button,
  Card,
  Menu,
  MenuItem,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Avatar from "@mui/material/Avatar";
import "./home.css";
import { BarChart, PieChart } from "@mui/x-charts";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";


const drawerWidth = 240;

const rows = [
  {
    color: "purple",
    type: "minivan",
    registration: new Date("2017-01-03"),
    capacity: 7,
  },
  {
    color: "purple",
    type: "minivan",
    registration: new Date("2017-01-03"),
    capacity: 7,
  },
  {
    color: "purple",
    type: "minivan",
    registration: new Date("2017-01-03"),
    capacity: 7,
  },
];

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  backgroundColor: "gray",
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export function Home() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
const [stockvalue ,setStockvalue ]=  React.useState([])
  const stockListValue =[10,20,15]
  React.useEffect(()=>{
    const newStockValues = [
      { id: 1, value: "12", label : "Group A" },
      { id: 2, value: "15",label : "Group B" },
      { id: 3, value: "45",label : "Group C" },

      // Add more objects as needed
    ];

    setStockvalue((stockvalue) => [
      ...stockvalue,
  ...newStockValues
    ]);
  },[])
  console.log(stockvalue);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="fixed" open={open}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{ mr: 2, ...(open && { display: "none" }) }}
            >
              <MenuIcon />
            </IconButton>

            <div className="header-div">
              {/* <Typography variant="h6" noWrap component="div"> */}
              <Button
                sx={{
                  color: "white",
                  textTransform: "none",
                  padding: "0px 5px 0px 5px",
                }}
              >
                Settings
              </Button>
              <Avatar sx={{ backgroundColor: "green" }}>
                <PopupState variant="popover" popupId="demo-popup-popover">
                  {(PopupState) => (
                    <React.Fragment>
                      <Button
                        {...bindTrigger(PopupState)}
                        sx={{ color: "white" }}
                      >
                        {" "}
                        A
                      </Button>

                      <Menu
                        className="menu-on-approve-btn"
                        {...bindMenu(PopupState)}
                      >
                        <MenuItem> My Profile </MenuItem>
                        <MenuItem>Log Out</MenuItem>
                      </Menu>
                    </React.Fragment>
                  )}
                </PopupState>
              </Avatar>
              {/* </Typography> */}
            </div>
          </Toolbar>
        </AppBar>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
          anchor="left"
          open={open}
        >
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "ltr" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List>
            {["Dashboard", "Orders", "Clients", "Stock Details"].map(
              (text, index) => (
                <ListItem key={text} disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
              )
            )}
          </List>
        </Drawer>
        <Main open={open}>
          <DrawerHeader />

          <Card className={open ? "main-content-div" : "main-close-div"}>
            <input className="input-date" type="date" />
            <Stack direction={"row"} sx={{ marginTop: "10px" }}>
              <Card className="card-1">
                <p className="card-para">
                  {" "}
                  Total Orders
                  <br />
                  <p className="card-para-value">28</p>
                </p>
              </Card>
              <Card className="card-2">
                <p className="card-para">
                  Total Users
                  <br />
                  <p className="card-para-value">11</p>
                </p>
              </Card>
              <Card className="card-3">
                <p className="card-para">
                  Stock Details
                  <br />
                  <p className="card-para-value"> 08</p>
                </p>
              </Card>
              <Card className="card-4">
                <p className="card-para">
                  Pending Approval
                  <br />
                  <p className="card-para-value">05</p>
                </p>
              </Card>
            </Stack>
            <Stack >
 
              <Accordion
                sx={{ margin: "10px 0px 10px 10px" }}
                className={
                  open ? "accordion-open-control" : "accordion-full-control"
                }
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>Stock List</Typography>
                </AccordionSummary>
                <AccordionDetails >
<Stack sx={{display:'flex',flexDirection:'row'}}>
<PieChart
series={[
  {


    data : stockvalue
    // data: [
    //   // { id: 0, value: {stockListValue[0]}, label: 'Group A' },
    //   { id: 1, value: 15, label: 'Group B' },
    //   { id: 2, value: 20, label: 'Group C' },
    // ],
  },
]}
width={400}
height={200}          />

                  <TableContainer sx={{ overflowY: "scroll" }}>
                    <Table>
                      <TableHead>
                        <TableRow>
                        <TableCell>Group A</TableCell>
                          <TableCell>Group B</TableCell>
                          <TableCell>Group C</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        <TableRow>
                          {stockListValue.map((data) => (
                        <TableCell>{data}</TableCell>
                      ))}

                          {/* <TableCell>10</TableCell>
                          <TableCell>15</TableCell>
                          <TableCell>20</TableCell> */}
                        </TableRow>
                      </TableBody>
                    </Table>
                  </TableContainer>

</Stack>
              
                </AccordionDetails>
              </Accordion>
            </Stack>
            <Card>
              <BarChart
                xAxis={[
                  {
                    scaleType: "band",
                    data: ["group A", "group B", "group C"],
                  },
                ]}
                series={[
                  { data: [5, 3, 5] },
                  { data: [1, 6, 3] },
                  { data: [2, 5, 6] },
                ]}
                colors={["grey", "blue", "black"]}
                width={800}
                height={300}
              />
            </Card>
            <Card>
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Names</TableCell>
                      <TableCell>List</TableCell>
                      <TableCell>Data</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      {/* {rows.map((data) => (
                        <TableCell>{data.color}</TableCell>
                      ))} */}

                      <TableCell>Group A</TableCell>
                      <TableCell>Group B</TableCell>
                      <TableCell>Group C</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Card>
          </Card>
        </Main>
      </Box>
    </div>
  );
}
