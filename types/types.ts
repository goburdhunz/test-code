interface Fairings {
    reused: boolean
    recovery_attempt: boolean
    recovered: boolean
    ships: string[]
}

interface Links {
    article?: string;
    flickr?: { small: string[], original: string[] };
    patch: { small: string, large?: string };
    presskit?: string;
    reddit?: { campaign: string, launch: string, media: string, recovery: string };
    webcast?: string;
    wikipedia?: string;
    youtube_id?: string;
}

interface Core {
    core: string;
    flight?: number;
    gridfins?: boolean;
    landing_attempt?: boolean;
    landing_success?: boolean;
    landing_type?: string;
    landpad?: string;
    legs?: boolean;
    reused?: boolean;
}

interface Failure {
    altitude: number;
    reason: string;
    time: number;
}

interface Payloads {
    type: string;
    id: string
}
export interface LaunchResponseData {
    auto_update?: boolean;
    capsules?: string[];
    cores: Core[];
    crew?: Record<string, string>[];
    date_local?: string;
    date_precision?: string;
    date_unix?:
    number;
    date_utc: string;
    details?: string;
    failures?: Failure[];
    fairings?: Fairings;
    flight_number?: number;
    id?: string;
    launch_library_id?: string;
    launchpad?: string;
    links: Links;
    name: string;
    net?: boolean;
    payloads: Payloads[];
    rocket?: string;
    ships?: string[];
    static_fire_date_unix?: number;
    static_fire_date_utc?: string;
    success: boolean;
    tbd?: boolean;
    upcoming?: boolean;
    window?: number;
}

