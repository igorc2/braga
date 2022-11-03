import { Box, useTheme, Typography } from '@mui/material'
import Header from '../../components/Header'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { tokens } from '../../theme'

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode)

  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions Page" />

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            An important question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Mussum Ipsum, cacilds vidis litro abertis. Cevadis im ampola pa arma uma
          pindureta. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per.
          Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis.
          Sapien in monti palavris qui num significa nadis i pareci latim.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            The second question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Mussum Ipsum, cacilds vidis litro abertis. Cevadis im ampola pa arma uma
          pindureta. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per.
          Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis.
          Sapien in monti palavris qui num significa nadis i pareci latim.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            An important question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Mussum Ipsum, cacilds vidis litro abertis. Cevadis im ampola pa arma uma
            pindureta. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per.
            Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis.
            Sapien in monti palavris qui num significa nadis i pareci latim.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Random question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Manduma pindureta quium dia nois paga.Suco de cevadiss deixa as pessoas mais interessantis.
          Copo furadis é disculpa de bebadis, arcu quam euismod magna.Nec orci ornare consequat. 
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Once more, another question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Copo furadis é disculpa de bebadis, arcu quam euismod magna.
          Viva Forevis aptent taciti sociosqu ad litora torquent.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            An important question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Diuretics paradis num copo é motivis de denguis. Casamentiss faiz malandris se pirulitá.
          </Typography>
        </AccordionDetails>
      </Accordion>

    </Box>
  )
}

export default FAQ