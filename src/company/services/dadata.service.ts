import { HttpException, Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { CompanyType } from '../entities/company.entity';
const DADATA_API_URL = 'http://suggestions.dadata.ru/suggestions/api/4_1/rs/findById/party';
const token = 'e53ca5076d1e0f99eb85f90d3e4f28d3124d7a41';

interface CompanySuggestion {
  value: string;
  unrestricted_value: string;
  data: {
    kpp: string;
    kpp_largest: string | null;
    capital: any;
    invalid: any;
    management: {
      name: string;
      post: string;
      start_date: number;
      disqualified: any;
    };
    founders: any;
    managers: any;
    predecessors: any;
    successors: any;
    branch_type: string;
    branch_count: number;
    source: any;
    qc: any;
    hid: string;
    type: CompanyType;
    state: {
      status: string;
      code: string | null;
      actuality_date: number;
      registration_date: number;
      liquidation_date: number | null;
    };
    opf: {
      type: string;
      code: string;
      full: string;
      short: string;
    };
    name: {
      full_with_opf: string;
      short_with_opf: string;
      latin: string | null;
      full: string;
      short: string | null;
    };
    inn: string;
    ogrn: string;
    okpo: string;
    okato: string;
    oktmo: string;
    okogu: string;
    okfs: string;
    okved: string;
    okveds: any;
    authorities: any;
    documents: any;
    licenses: any;
    finance: any;
    address: {
      value: string;
      unrestricted_value: string;
      invalidity: any;
      data: {
        postal_code: string;
        country: string;
        country_iso_code: string;
        federal_district: string;
        region_fias_id: string;
        region_kladr_id: string;
        region_iso_code: string;
        region_with_type: string;
        region_type: string;
        region_type_full: string;
        region: string;
        area_fias_id: string | null;
        area_kladr_id: string | null;
        area_with_type: string | null;
        area_type: string | null;
        area_type_full: string | null;
        area: string | null;
        city_fias_id: string;
        city_kladr_id: string;
        city_with_type: string;
        city_type: string;
        city_type_full: string;
        city: string;
        city_area: string;
        city_district_fias_id: string | null;
        city_district_kladr_id: string | null;
        city_district_with_type: string;
        city_district_type: string;
        city_district_type_full: string;
        city_district: string;
        settlement_fias_id: string | null;
        settlement_kladr_id: string | null;
        settlement_with_type: string | null;
        settlement_type: string | null;
        settlement_type_full: string | null;
        settlement: string | null;
        street_fias_id: string;
        street_kladr_id: string;
        street_with_type: string;
        street_type: string;
        street_type_full: string;
        street: string;
        stead_fias_id: string | null;
        stead_cadnum: string | null;
        stead_type: string | null;
        stead_type_full: string | null;
        stead: string | null;
        house_fias_id: string;
        house_kladr_id: string;
        house_cadnum: string;
        house_flat_count: number | null;
        house_type: string;
        house_type_full: string;
        house: string;
        block_type: string | null;
        block_type_full: string | null;
        block: string | null;
        entrance: string | null;
        floor: string | null;
        flat_fias_id: string | null;
        flat_cadnum: string | null;
        flat_type: string | null;
        flat_type_full: string | null;
        flat: string | null;
        flat_area: string;
        square_meter_price: string;
        flat_price: string | null;
        room_fias_id: string | null;
        room_cadnum: string | null;
        room_type: string | null;
        room_type_full: string | null;
        room: string | null;
        postal_box: string | null;
        fias_id: string;
        fias_code: string;
        fias_level: string;
        fias_actuality_state: string;
        kladr_id: string;
        geoname_id: string;
        capital_marker: string;
        okato: string;
        oktmo: string;
        tax_office: string;
        tax_office_legal: string;
        timezone: string;
        geo_lat: string;
        geo_lon: string;
        beltway_hit: string;
        beltway_distance: string | null;
        metro: Array<{
          name: string;
          line: string;
          distance: number;
        }>;
        divisions: any;
        qc_geo: string;
        qc_complete: any;
        qc_house: any;
        history_values: any;
        unparsed_parts: any;
        source: string;
        qc: string;
      };
    };
    phones: any;
    emails: any;
    ogrn_date: number;
    okved_type: string;
    employee_count: any;
  };
}

interface SuggestionsResponse {
  suggestions: CompanySuggestion[];
}

@Injectable()
export class DadataService {
  constructor(private readonly httpService: HttpService) {}

  public async getCompanyByInn(inn: string): Promise<{ name: string; type: CompanyType }> {
    const { data } = await firstValueFrom(
      this.httpService.post<SuggestionsResponse>(
        DADATA_API_URL,
        { query: inn, branch_type: 'MAIN', count: 1 },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Token ${token}`,
          },
        },
      ),
    );

    if (data.suggestions.length === 0) {
      console.log(data.suggestions);
      throw new HttpException('', 400);
    }
    console.log(data.suggestions[0]);
    const val = data.suggestions[0];
    return { name: val.data.name.short_with_opf, type: val.data.type };
  }
}
