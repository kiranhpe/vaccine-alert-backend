export interface Vaccine {
    centers: Center[];
}

export interface Center {
    center_id:     number;
    name:          string;
    address:       string;
    state_name:    string;
    district_name: string;
    block_name:    string;
    pincode:       number;
    lat:           number;
    long:          number;
    from:          string;
    to:            string;
    fee_type:      string;
    sessions:      Session[];
}

export interface Session {
    session_id:         string;
    date:               string;
    available_capacity: number;
    min_age_limit:      number;
    vaccine:            VaccineEnum;
    slots:              Slot[];
}

export enum Slot {
    The0100Pm0300Pm = "01:00PM-03:00PM",
    The0300Pm0500Pm = "03:00PM-05:00PM",
    The0900Am1100Am = "09:00AM-11:00AM",
    The1100Am0100Pm = "11:00AM-01:00PM",
}

export enum VaccineEnum {
    Covaxin = "COVAXIN",
    Covishield = "COVISHIELD",
}
