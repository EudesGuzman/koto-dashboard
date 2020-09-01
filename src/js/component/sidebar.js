import React from "react";
import "../../styles/sidebar.scss";
import { Link } from "react-router-dom";

import logo from "../../img/icon-kotokan.png";

import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import DashboardIcon from "@material-ui/icons/Dashboard";
import SchoolIcon from "@material-ui/icons/School";
import LocalParkingIcon from "@material-ui/icons/LocalParking";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import ContactSupportIcon from "@material-ui/icons/ContactSupport";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
	appBar: {
		zIndex: theme.zIndex.drawer + 1,
		background: "#F5A623"
	},
	drawer: {
		width: drawerWidth,
		flexShrink: 0
	},
	drawerPaper: {
		width: 200
	},
	drawerContainer: {
		overflow: "auto"
	},
	title: {
		flexGrow: 1
	},
	cambiar: {
		margin: 5,
		background: "gray"
	}
}));

export const SideBar = () => {
	const classes = useStyles();

	return (
		<div>
			<AppBar position="fixed" className={classes.appBar}>
				<Toolbar>
					<Link>
						<img src={logo} />
					</Link>
					<Typography variant="h6" className={classes.title}>
						Kotokan for school
						<span className={classes.cambiar}>Beta</span>
					</Typography>
					<Button color="inherit">
						Login out <ExitToAppIcon />{" "}
					</Button>
				</Toolbar>
			</AppBar>

			<Drawer variant="permanent" className="classes.drawer" classes={{ paper: classes.drawerPaper }}>
				<Toolbar />
				<div className={classes.drawerContainer}>
					<List>
						<ListItem button>
							<ListItemIcon>
								<DashboardIcon />
							</ListItemIcon>
							<ListItemText primary="Home" />
						</ListItem>

						<ListItem button>
							<ListItemIcon>
								<SchoolIcon />
							</ListItemIcon>
							<ListItemText primary="Classname1" />
						</ListItem>

						<ListItem button>
							<ListItemIcon>
								<SchoolIcon />
							</ListItemIcon>
							<ListItemText primary="Classname2" />
						</ListItem>

						<ListItem button>
							<ListItemIcon>
								<LocalParkingIcon />
							</ListItemIcon>
							<ListItemText primary="Problem" />
						</ListItem>

						<ListItem button>
							<ListItemIcon>
								<LockOpenIcon />
							</ListItemIcon>
							<ListItemText primary="Admin" />
						</ListItem>
					</List>
					<Toolbar />
					<Divider />
					<List>
						<h8>Support</h8>
						<ListItem button>
							<ListItemIcon>
								<ContactSupportIcon />
							</ListItemIcon>
							<ListItemText primary="Supprt" />
						</ListItem>
					</List>
				</div>
			</Drawer>
		</div>
	);
};
