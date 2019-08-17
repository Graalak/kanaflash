import React, {
    Component
} from 'react';

class Difficulty extends Component {
    render() {
        const {changeDifficulty, chosen_difficulty} = this.props;
        const all_tier = ["1", "2", "3", "4", "5", "6", "7"];
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    {
                        all_tier.map(res => (
                            <label for={"Palier :"+res}>
                                <input type="checkbox" checked={chosen_difficulty.includes(+res)} value={res} name={"Palier :"+res} onChange={(e) => changeDifficulty(e.target.value)}/>Palier {res}
                            </label>
                            )
                        )
                    }
                </form>
            </div>
        );
    }
}

export default Difficulty;