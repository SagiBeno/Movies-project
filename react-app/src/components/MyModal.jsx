import Modal from "@mui/material/Modal";
import IconButton from "@mui/material/IconButton";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';

export default function MyModal(props) {
    const open = props?.open
    const title = props?.title
    const overwiev = props?.overview
    const poster_path = `http://image.tmdb.org/t/p/w500/${props?.poster_path}`
    const name = props?.name

    const handleClose = () => {
        props.setOpenModal(false)
    }

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        > 
            <Box 
                sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: {xs: '90vw', sm: 600},
                    bgcolor: "whitesmoke",
                    borderRadius: "5px",
                    boxShadow: 24,
                    display: "flex",
                    flexDirection: "column",
                    padding: "20px",
                    gap: "10px",
                    justifyContent: "center",
                    maxHeight: '80vh',
                    overflowY: 'auto'
                }}
            >
                <Box xs={{display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', p: 2, position: 'relative'}}>
                    <Typography id="modal-modal-title" variant="h6" component="h2" sx={{textAlign: 'center', flexGrow: 1, pr: 4}}>
                        {title || name}
                    </Typography>

                    <IconButton sx={{position: 'absolute', right: 8, top: 8}} onClick={handleClose}>
                        <ClearRoundedIcon />
                    </IconButton>
                </Box>
                
                <Box
                    sx={{
                        flex: 1,
                        overflowY: 'auto'
                    }}
                >
                    <Box
                        sx={{
                            textAlign: 'center', mb: 2
                        }}
                    >
                        <img src={poster_path} alt={title} title={title} style={{maxHeight: '400px', maxWidth: '100%', width: 'auto', height: 'auto', borderRadius: '5px', boxShadow: '2px 2px 10px black'}} />
                    </Box>

                    <Typography id="modal-modal-description" sx={{ mt: 2, p: 2, textAlign: 'justify' }}>
                        {overwiev}
                    </Typography>
                    
                </Box>
            </Box>
        </Modal>
    )
}