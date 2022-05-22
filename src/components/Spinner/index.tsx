import { StyledCustomSpinner} from "./Styled.Spinner";;


const Spinner = () => {
    return(
        <StyledCustomSpinner>
            <div className="spinner-border" role="status" />
        </StyledCustomSpinner>
    )
}

export default Spinner