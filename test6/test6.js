class ElectionSeats {
    totalSeats = 15;
}

class ElectionVotes{
    vA = 15000
    vB = 5400
    vC = 5500
    vD = 5550
}
    

class CalculateElection{
    static calculate(){
        const seats = new ElectionSeats()
        const votes = new ElectionVotes()
        const totalVotes = votes.vA + votes.vB + votes.vC + votes.vD
        const a = Math.round((seats.totalSeats * votes.vA) / totalVotes)
        const b = Math.round((seats.totalSeats * votes.vB) / totalVotes)
        const c = Math.round((seats.totalSeats * votes.vC) / totalVotes)
        const d = Math.round((seats.totalSeats * votes.vD) / totalVotes)
        return [a, b, c, d]
    }
        
}
    

seats = CalculateElection.calculate()
console.log('Seat: A => '+ seats[0],'Seat: B => '+ seats[1],'Seat: C => '+ seats[2],'Seat: D => '+ seats[3]);


