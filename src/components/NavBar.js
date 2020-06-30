import React from "react";
import PropTypes from "prop-types";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import { makeStyles, useTheme, fade } from "@material-ui/core/styles";
import MailIcon from "@material-ui/icons/Mail";
import {
  Menu,
  Category,
  MoneyOutlined,
  BrandingWatermarkOutlined,
  Search,
  Colorize,
} from "@material-ui/icons";
import {
  Toolbar,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Drawer,
  Divider,
  CssBaseline,
  AppBar,
  Hidden,
  IconButton,
  ListSubheader,
  InputBase,
  Button,
  Slider,
  Input,
  InputLabel,
  Radio,
  RadioGroup,
  FormControl,
  FormLabel,
  FormControlLabel,
} from "@material-ui/core";

import { red, green, blue } from "@material-ui/core/colors";

import ItemContainer from "./ItemContainer";
import { connect } from "react-redux";
import {
  FilterBrand,
  FilterColor,
  FilterPrice,
  FilterSearch,
  FilterCatogery,
} from "../Actions/FilterAction";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% )`,
      marginLeft: drawerWidth,
    },
    zIndex: theme.zIndex.drawer + 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  rootList: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",

    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchContainer: {
    width: "100%",
    display: "block",
    float: "left",
    padding: theme.spacing(2, 1, 2, 1),
    [theme.breakpoints.up("sm")]: {
      padding: theme.spacing(2, "30%", 2, "30%"),
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
  },
  appheader: {
    width: "100%",
    display: "inline-block",
  },
  sliderTextContainer: {
    marginLeft: "10%",
    marginRight: "10%",
    display: "inline-block",
    width: "30%",

    float: "left",
  },
  sliderText: {
    fontSize: 8,
  },
}));

function NavBar(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const [slideValue, setSlideValue] = React.useState([50, 60]);
  const [sliderMax, setSliderMax] = React.useState(10000);
  const [sliderMin, setSliderMin] = React.useState(100);
  const [selectedColor, setColor] = React.useState("all");

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleSliderChange = (event, newValue) => {
    setSlideValue(newValue);
    props.filterPrice(newValue);
  };
  const handleColor = (event, newValue) => {
    //console.log(newValue);
    props.filterColor(event.target.value);
    setColor(event.target.value);
  };

  const handleSearch = (event, val) => {
    console.log(event.target.value);
    props.filterItem(event.target.value);
  };
  const handleCategory = (val) => {
    props.filterCatogery(val);
  };
  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <div className={classes.toolbar} />

      <Divider />
      <List
        className={classes.rootList}
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            Filters
          </ListSubheader>
        }
      >
        <ListItem>
          <ListItemIcon>
            <Category />
          </ListItemIcon>
          <ListItemText primary="Catogery" />
        </ListItem>
        <List component="div" disablePadding>
          <ListItem
            button
            className={classes.nested}
            onClick={handleCategory.bind(this, "All")}
            value="All"
          >
            <ListItemText primary="All" />
          </ListItem>
          <ListItem
            button
            className={classes.nested}
            onClick={handleCategory.bind(this, "Tshirt")}
          >
            <ListItemText primary="Tshirt" />
          </ListItem>
          <ListItem
            button
            className={classes.nested}
            onClick={handleCategory.bind(this, "Denim")}
          >
            <ListItemText primary="Denim" />
          </ListItem>
          <ListItem
            button
            className={classes.nested}
            onClick={handleCategory.bind(this, "skirt")}
          >
            <ListItemText primary="skirt" />
          </ListItem>
          <ListItem
            button
            className={classes.nested}
            onClick={handleCategory.bind(this, "blouse")}
          >
            <ListItemText primary="blouse" />
          </ListItem>
        </List>
        <ListItem>
          <ListItemIcon>
            <MoneyOutlined />
          </ListItemIcon>
          <ListItemText primary="Price" />
        </ListItem>

        <div
          style={{
            width: "100%",
            alignContent: "center",
            paddingLeft: 25,
            paddingRight: 25,
          }}
        >
          <Slider
            defaultValue={slideValue}
            max={sliderMax}
            min={sliderMin}
            onChange={handleSliderChange}
            aria-labelledby="range-slider"
          />
        </div>
        <div>
          <div className={classes.sliderTextContainer}>
            <Input
              type="disabled"
              className={classes.sliderText}
              value={"Rs." + slideValue[0]}
            />
            <InputLabel className={classes.sliderText}>MAX</InputLabel>
          </div>
          <div className={classes.sliderTextContainer}>
            <Input
              type="disabled"
              className={classes.sliderText}
              value={"Rs." + slideValue[1]}
            />
            <InputLabel className={classes.sliderText}>MIN</InputLabel>
          </div>
        </div>

        <ListItem>
          <ListItemIcon>
            <BrandingWatermarkOutlined />
          </ListItemIcon>
          <ListItemText primary="Brand" />
        </ListItem>

        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemText primary="All" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemText primary="Nike" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemText primary="Inc" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemText primary="Adidas" />
          </ListItem>
        </List>
        <ListItem>
          <ListItemIcon>
            <Colorize />
          </ListItemIcon>
          <ListItemText primary="Colors" />
        </ListItem>

        <div>
          <Radio
            checked={selectedColor === "black"}
            onChange={handleColor}
            style={{ color: "#000000" }}
            value="black"
            name="radio-button-demo"
            inputProps={{ "aria-label": "black" }}
          />
          <Radio
            checked={selectedColor === "red"}
            style={{ color: "#ff0000" }}
            onChange={handleColor}
            value="red"
            name="radio-button-demo"
            inputProps={{ "aria-label": "red" }}
          />
          <Radio
            checked={selectedColor === "green"}
            style={{ color: "#00ff00" }}
            onChange={handleColor}
            value="green"
            name="radio-button-demo"
            inputProps={{ "aria-label": "green" }}
          />
          <Radio
            checked={selectedColor === "blue"}
            style={{ color: "#0000ff" }}
            value="blue"
            onChange={handleColor}
            name="radio-button-demo"
            inputProps={{ "aria-label": "blue" }}
          />
        </div>
        <ListItem>
          <ListItemIcon>
            <Colorize />
          </ListItemIcon>
          <ListItemText primary="Colors" />
        </ListItem>

        <div>
          <FormControl component="fieldset">
            <RadioGroup>
              <FormControlLabel
                value="sm"
                control={<Radio color="primary" />}
                label="SM"
                labelPlacement="start"
              />
              <FormControlLabel
                value="l"
                control={<Radio color="primary" />}
                label="L"
                labelPlacement="start"
              />
              <FormControlLabel
                value="xl"
                control={<Radio color="primary" />}
                label="XL"
                labelPlacement="start"
              />
              <FormControlLabel
                value="xxl"
                control={<Radio color="primary" />}
                label="XXL"
                labelPlacement="start"
              />
            </RadioGroup>
          </FormControl>
        </div>
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <div className={classes.appheader}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              className={classes.menuButton}
            >
              <Menu />
            </IconButton>

            <Typography variant="h6" noWrap>
              Online Shoping
            </Typography>
          </div>
          <Button>Cart</Button>
        </Toolbar>
        <div className={classes.searchContainer}>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <Search />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              onChange={handleSearch}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
        </div>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <div className={classes.toolbar} />
        <ItemContainer />
      </main>
    </div>
  );
}

NavBar.propTypes = {
  window: PropTypes.func,
};
const mapDispatchtoprops = (dispatch) => {
  return {
    filterSearch: (para) => dispatch(FilterSearch(para)),
    filterBrand: (para) => dispatch(FilterBrand(para)),
    filterColor: (para) => dispatch(FilterColor(para)),
    filterCatogery: (para) => dispatch(FilterCatogery(para)),
    filterPrice: (para) => dispatch(FilterPrice(para)),
  };
};
export default connect(null, mapDispatchtoprops)(NavBar);
