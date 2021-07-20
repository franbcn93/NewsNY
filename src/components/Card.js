import React, { useState } from "react";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import { makeStyles } from "@material-ui/core/styles";
import Imagen from "./Imagen";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  textCenter: {
    textAlign: "center",
    paddingTop: "20px",
  },
}));

export const Card = ({ dato }) => {
  const { published_date, title, url, abstract, byline, media } = dato;

  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);

  const classes = useStyles();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 ">
      <div className="card border-dark">
        <div className="card-header">
          <h4>{title}</h4>
        </div>
        <div className="card-body">
          <div className="card-text">
            <p>{published_date}</p>
            <p>{abstract}</p>

            <a href={url}>See the whole news...</a>

            <button
              style={{ marginTop: "20px" }}
              type="button"
              className="btn btn-dark btn-block"
              onClick={() => {
                // guardarBandera(flag);
                handleOpen();
              }}
            >
              Show more info...
            </button>
            <Modal
              aria-labelledby="transition-modal-title"
              aria-describedby="transition-modal-description"
              className={classes.modal}
              open={open}
              onClose={handleClose}
              closeAfterTransition
              BackdropComponent={Backdrop}
              BackdropProps={{
                timeout: 500,
              }}
            >
              <div style={modalStyle} className={classes.paper}>
                <h2 id="simple-modal-title">{title}</h2>
                <p>{abstract}</p>
                <Imagen dato={dato} />

                <p className={classes.textCenter}>{byline}</p>
              </div>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
};
